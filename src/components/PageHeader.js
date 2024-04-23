export function PageHeader({text, highlight, textPosition}){
    return (
        <h2 className={"text-4xl font-bold py-1 capitalize " + (textPosition ? textPosition : "text-left")}>{text && text} {highlight && <span className="text-red-400 dark:text-red-600">{highlight}</span>}</h2>
    )
}