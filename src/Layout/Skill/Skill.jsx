import react from "../../../Image/react.png"
import node from "../../../Image/node.png"
import next from "../../../Image/next.png"
import express from "../../../Image/expreess.png"
import tail from "../../../Image/TailWind.png"
import html from "../../../Image/New-HTML5_Logo.png"
import css from "../../../Image/css-logo.png"
import javasript from "../../../Image/JavaScript-logo.png"
import mongoDb from "../../../Image/mongodb.png"

const Skill = () => {
    return (
        <div>
            <h1 className="text-center my-10 text-3xl font-bold">My Skills</h1>
            <ul className="grid lg:grid-cols-5 gap-6 mx-auto text-center grid-cols-2 md:grid-cols-3 mx-auto">
            <img src={react} className="w-32 h-32 rounded-full" />
            
            <img src={node} className="w-32 h-32 rounded-full" />
            
            <img src={next} className="w-32 h-32 rounded-full" />
            
            <img src={mongoDb} className="w-32 h-32 rounded-full" />
            
            <img src={express} className="w-32 h-32 rounded-full" />
            
            <img src={javasript} className="w-32 h-32 rounded-full" />
            
            <img src={css} className="w-32 h-32 rounded-full" />
            
            <img src={html} className="w-32 h-32 rounded-full" />
            <img src={tail} className="w-32 h-32 rounded-full" />
            
            
            </ul>
        </div>
    );
};

export default Skill;