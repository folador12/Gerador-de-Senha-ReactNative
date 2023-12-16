import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => { 

    const getItem = async (key) => {

        try {
            const passowords = await AsyncStorage.getItem(key);
            return JSON.parse(passowords) || [];
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

    const saveItem = async (key, value) => {

        try {
            let passowords = await getItem(key);

            passowords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passowords));
        }
        catch (error) {
            console.log(error);
        }
    }

    const removeItem = async (key, item) => {
            
            try {
                let passowords = await getItem(key);

                let myPasswords = passowords.filter((password) => {return password !== item});

                await AsyncStorage.setItem(key, JSON.stringify(myPasswords));

                return myPasswords;
            }
            catch (error) {
                console.log(error);
            }
    }

    return {getItem, saveItem, removeItem}
}

export default useStorage;