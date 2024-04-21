export function Input({value, onChange}){
    function handleChange(e){
        if(typeof onChange === 'function'){
            onChange(e.target.value);
        }
    }

    return(
        <input type="text" className="bg-white-400 text-slate-700 dark:bg-white-50 dark:text-white-400 rounded-lg border-red-400 p-2" value={value} onChange={handleChange}/>
    )
}