import React from 'react';
import { BluePrint } from '../../components/blueprint/system/blueprint_system';
export default function test1() {
  const obj = new BluePrint("test");
  const obj2 = new BluePrint("test2")
  console.log(obj.getInstance())
  console.log(obj2.getInstance());

  return <div>test1</div>;
}
