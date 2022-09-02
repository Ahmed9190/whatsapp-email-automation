export function delay(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

export function getFileNameAndExtension(filePath: string): string[] {
  const fileSections = filePath.split("/");
  const fileSectionIndex = fileSections.length - 1;
  const [fileName, extension] = fileSections[fileSectionIndex].split(".");
  return [fileName, extension];
}
