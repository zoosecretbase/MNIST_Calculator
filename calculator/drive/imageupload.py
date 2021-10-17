from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

gauth = GoogleAuth()
gauth.LocalWebserverAuth()
drive = GoogleDrive(gauth)

# credential_path = os.path.join(Users/ryomacmini/work/codes/MNIST_Calculator/calculator/drive,"client_secrets.json")
# store = "Users/ryomacmini/work/codes/MNIST_Calculator/calculator/drive"
# credentials = store.get()
# gauth.credentials = credentials


folder_id = "1NyB0TBcwtJm3xi9DIEV-Ty9UmVX0Gisc"
f = drive.CreateFile({"title":"test.png",
                        "mimeType":"image/png",
                        'parents': [folder_id]})
f.SetContentFile('test.png')
print(f)
f.Upload()
