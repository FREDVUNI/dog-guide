# Fixes

## Dogs.jsx

```import React, { useState, useEffect } from "react";

const Dogs = () => {
  const [dogBreed, setDogBreed] = useState("");

  useEffect(() => {
    handleSearch();
  }, [dogBreed]);

  return (
    <div>
      <Dog key={dog.id} {...dog} />
    </div>
  );
};

export default Dogs;
```

## Dog.jsx

```import React, { useState, useEffect } from "react";

const Dog = () => {
  const [dogBreed, setDogBreed] = useState("");

  useEffect(() => {
    handleSearch();
  }, [dogBreed]);

  return (
    <div>
      <Dog key={dog.id} {...dog} />
    </div>
  );
};

export default Dog;
```
