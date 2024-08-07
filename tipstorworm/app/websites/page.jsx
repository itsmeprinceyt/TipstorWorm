import Image from "next/image";
import Card from "@/app/(components)/card";


export default function websites() {
    // add mongo db code here to fetch all the data.
    // fetch the data and see what data has what color then add that color in this ButtonStyle then map all the data one by one and make a html file then put that html file in the return

    return (
        <div className="bg-pink-500 flex flex-col items-center justify-center min-h-screen p-4 gap-4">
            
            <Card 
            url="/cat.jpg"
            alt="Cat"
            title="Title"
            description="This is a dummy description of the asset which has been uploaded to this page"
            credit="by @itsmeprinceyt"
            />
            <Card 
            url="/cat.jpg"
            alt="Cat"
            title="Title"
            description="This is a dummy description of the asset which has been uploaded to this page"
            credit="by @itsmeprinceyt"
            />
            <Card 
            url="/cat.jpg"
            alt="Cat"
            title="Title"
            description="This is a dummy description of the asset which has been uploaded to this page"
            credit="by @itsmeprinceyt"
            />

        </div>
    )
}