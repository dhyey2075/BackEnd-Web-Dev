import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "D://BackEnd//Video_91";
let files = await fs.readdir(basePath);
for (let item of files) {
  let ext = item.split(".")[item.split(".").length - 1];
  if (item != "main.js" && ext!= "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basePath, ext))) {
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
    }
  }
}
