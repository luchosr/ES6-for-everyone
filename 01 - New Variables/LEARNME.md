# Var, let and const.

* `var` variables are **function scoped**, they are only available inside of the function where they are created.

* `let` variables are **block scoped** they are available inside of the block inside where they are created. A block initializes with `{` and finishes with `}`.

* You cannot declare 2 let variables with the same name in te same block. If you declare 2 let variables called equal in different scopes, they are different variables.

* You cannot update a **const variable** or a **const object** or a **const you name it** ok?? they are unmutable.

* **IIFE**: inmediatly invoque function expression, is a function that auto excecutes herself `(function (){ //.. })();`
