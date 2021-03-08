
import { myResult, $imports } from "./my-component";

$imports.$mock({
  "./my-dependency": { myFunction: () => "Hello from mocked World" }
});

console.log(myResult())
