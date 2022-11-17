from datetime import datetime
from pathlib import Path
import zipfile

OBJECT_TO_BACKUP = '/Users/pedro/PycharmProjects/CTD/teste'
BACKUP_DIRECTORY = '/Users/pedro/PycharmProjects/CTD/backup'
MAX_BACKUP_AMOUNT = 5

object_to_backup_path = Path(OBJECT_TO_BACKUP)
backup_directory_path = Path(BACKUP_DIRECTORY)

assert object_to_backup_path.exists() # validar se o objeto que vai ser feito o backup existe

# validar se o diretório de backup existe, se não, cria o diretório
backup_directory_path.mkdir(parents=True, exist_ok=True)

# puxar informação de quantos backups em formato zip já foram feitos
existing_backups = [
    x for x in backup_directory_path.iterdir()
        if x.is_file() and x.suffix == '.zip' and x.name.startswith('backup-')
]

# garante que só haverá 5 backups deletando os mais antigos após finalização do mais recente

oldest_to_newest_backup_by_name = list(sorted(existing_backups, key=lambda f: f.name))
while len(oldest_to_newest_backup_by_name) >= MAX_BACKUP_AMOUNT: # >= porque um novo será criado
    backup_to_delete = oldest_to_newest_backup_by_name.pop(0)
    backup_to_delete.unlink()

# criar um arquivo .zip (se for uma pasta ou um arquivo)
backup_file_name = f'backup-{datetime.now().strftime("%Y%m%d%H%M%S")}.zip'
zip_file = zipfile.ZipFile(str(backup_directory_path/backup_file_name), mode='w')
if object_to_backup_path.is_file():
    # se o objeto a ser escrito for um arquivo, o zip será criado com o arquivo único
    zip_file.write(
        object_to_backup_path.absolute(),
        arcname=object_to_backup_path.name,
        compress_type=zipfile.ZIP_DEFLATED
    )
elif object_to_backup_path.is_dir():
    # se o objeto for uma pasta, o zip será criado com todos os arquivos
    for file in object_to_backup_path.glob('**/*'):
        if file.is_file():
            zip_file.write(
                file.absolute(),
                arcname=str(file.relative_to(object_to_backup_path)),
                compress_type=zipfile.ZIP_DEFLATED
            )

# fecha o arquivo .zip criado
zip_file.close()