# useExpense project's API

## Documentation
----
## Rest Endpoint:
`http://localhost:4000/api/v1`

## Todo API endpoints

### Get All Expenses
----
  Returns json data with all expenses.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/expenses`|GET|None|None|Status 200||


**Get Expense**
----
  Returns json data about a single expense.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/expenses/:id`|GET|`id=[ObjectId]`|None|Status 200|Status 404|

**Create Expense**
----
  Returns json data about the created expense.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/expenses`|POST|None|`title=[String]`|Status 200|Status 400 |

**Update Expense**
----
  Returns json data about the updated expense.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/expenses/:id`|PUT|`id=[ObjectId]`|`title=[String]`|Status 200|Status 400 |


**Delete Expense**
----
  Returns json data about the deleted expense.
  
  | URL | Method | Params | Data Params | Success response | Error response|
  |--|--|--|--|--|--|
  |`/expenses/:id`|DELETE|`id=[ObjectId]`|none|Status 200|Status 400 |
