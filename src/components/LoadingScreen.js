export function LoadingScreen({ subtitle }) {
  return (
    <div className="justify-self-center flex h-1/2 items-center justify-center flex-col sm:flex-row gap-4">
      <div className="relative size-[50px]">
        <span className="loader"></span>
      </div>
      <div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-700 dark:text-white-100 ">
          Loading the Meteor...
        </h2>
        {subtitle && <p className="text-bold text-xl text-center mt-2">{subtitle}</p>}
      </div>
    </div>
  );
}
