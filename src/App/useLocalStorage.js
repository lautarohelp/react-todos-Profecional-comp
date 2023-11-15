import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [sicronizedItem, setSicronizedItem] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false); //estados
  
  React.useEffect( () => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
          
        }else{
        parsedItem = JSON.parse(localStorageItem);
                  setItem(parsedItem);

        console.log(parsedItem);

      }
  
      setLoading(false);
      } catch (error) {
        setLoading(false);
        setSicronizedItem(true);
        setError(true);
      }
    }, 2000);
  }, [sicronizedItem]);

  



  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));

    setItem(newItem);
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSicronizedItem(false);
  } 

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  }
}

export { useLocalStorage };