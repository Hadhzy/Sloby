export default function test1() {
  let input = '<h1 style={"color": "green", "backgroundColor": "red"} className="testClass">test</h1>';

//   Split the input by the first occurence of a space
  let CustomTag = `${input.substring(1, input.indexOf(" "))}`
  let tagData = input.substring(CustomTag.length + 1, input.indexOf(">")).trim().split("}").map((item: string) => {
      return item.trim().split("=").map((item: string) => {
        if (item.startsWith("{")) {
          console.log("item", item)
          item = item + "}";
          item = JSON.parse(item);
          return item;
        }
        return item.trim();
      });
    }
  );

  // Create an object using the tagData array
  let tagDataObj = {};
  tagData.forEach((item: any) => {
    // @ts-ignore
    tagDataObj[item[0]] = item[1];
  });

  console.log("tag", CustomTag, "tagData", tagDataObj);

  return (
    <CustomTag {...tagDataObj}>test</CustomTag>
  );
}
