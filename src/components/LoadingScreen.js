export function LoadingScreen(){
    return (
        <div className="flex h-3/4 items-center justify-center flex-col sm:flex-row gap-4">
            <div className="relative size-[50px]">
                <span className="loader"></span>
            </div>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-700 dark:text-white-100 ">Loading the Meteor...</h2>
        </div>
    )
}