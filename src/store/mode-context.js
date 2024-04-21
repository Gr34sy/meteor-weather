import { createContext, useState } from "react";
// !!localStorage.getItem("nightmode")
const NightmodeContext = createContext(false);

export function NightmodeContextProvider({children}){
    const [nightmode, setNightmode] = useState(false);

    function changeNightmode(){
        setNightmode((prev) => !prev);
    }

    const context = {
        mode: nightmode,
        changeMode: changeNightmode,
    };

    return <NightmodeContext.Provider value={context}>
        {children}
    </NightmodeContext.Provider>
}

export default NightmodeContext;