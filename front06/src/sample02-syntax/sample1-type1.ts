export const typeSample1 = () => {
  console.clear();
  console.log('typeサンプル1');

  // number
  const num: number = 1 + 2;
  console.log(`${typeof num} : ${num}`);

  // boolean
  const boo: boolean = false || true || undefined;
  console.log(`${typeof boo} : ${boo}`);

  // string
  const str: string = 'this is text';
  console.log(`${typeof str} : ${str}`);

  // おおむね無意味
  // let obj: object = { propA: 1, propB: 'foo' };
  // console.log(obj);
  // console.log(obj.propA); // 不可能（C#のobject型に任意のインスタンスを入れた時と同じ）

  // 非推奨
  // let variable: any = { propA: 10, propB: 'foo' };
  // console.log(variable);
  // console.log(variable.propA);
  // console.log(variable.propC); // 出来てしまう
};