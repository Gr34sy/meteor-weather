import { BigBox } from "@/components/BigBox"
import { SearchBar } from "@/components/SearchBar"

export default function ForecastPage(){
    return (
        <div className="justify-self-stretch flex  flex-col gap-4">
            <SearchBar />
           <h2>30 Day forecast</h2>
           <div className="grid-forecast grid gap-4">
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
                <BigBox />
           </div>
        </div>
    )
}