"use client"

export default function ErrorBoundary({error}){
    return (
        <div className="text-red-600">
        {error.message}
    </div>
    )
}