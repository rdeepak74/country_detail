import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// export function useTheme(){
// //   const [isDark,setDark] = useContext(ThemeContext);
//     console.log(useContext(ThemeContext));
//   return useContext(ThemeContext)
// }

// export const useTheme =()=>{
//     return useContext(ThemeContext);
// }

export const useTheme =()=>useContext(ThemeContext);