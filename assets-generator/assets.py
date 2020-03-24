import os

targetDir = "../example-experiment/src/main/kotlin/casper/asset"
sourceDir = "../example-experiment/src/main/resources/"
templateFile = "Assets.kt"
templateForLine = "			collection.add(manager.models.loader(\"FILE_NAME\"))"
templateForAsset = "		val ASSET_NAME = manager.getModel(\"FILE_NAME\")!!"
extension = ".babylon"

baseDir = os.getcwd()

with open(templateFile, 'r') as file:
    templateData:str = file.read()

#change file source dir for look resources
os.chdir(baseDir)
os.chdir(sourceDir)
allFiles = os.listdir()

files = []
for file in allFiles:
    if (file.rfind(extension) == len(file) - len(extension)):
        files.append(file)

loadersList = []
assetsList = []
for file in files:
    loadersList.append(templateForLine.replace("FILE_NAME", file))

    asset = file.replace(extension, "").replace(".", "_").replace(" ", "_")
    assetsList.append( templateForAsset.replace("FILE_NAME", file).replace("ASSET_NAME", asset))

outputData = templateData
outputData = outputData.replace("LOADERS_LIST", "\n".join(loadersList))
outputData = outputData.replace("ASSETS_LIST", "\n".join(assetsList))


#change file target
os.chdir(baseDir)
os.chdir(targetDir)

with open('Assets.kt', 'w') as file:
    file.write(outputData)