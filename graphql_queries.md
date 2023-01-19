#### Get single client
``` 
{
  client(id:"1"){
    id
    name
    email
    phone
  }
}
```

#### Get All clients
``` 
{
  clients{
    id
    name
    email
    phone
  }
}
```

#### Get single project with related client
``` 
{
  project(id: 1) {
    name
    description,
    client {
      name
      email
    }
  }
}
```

#### Get All projects
``` 
{
  projects {
    name
    status
    description
  }
}
```

#### Create new project and return all data
```
mutation {
  addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
    id
    name
    email
    phone
  }
}
```