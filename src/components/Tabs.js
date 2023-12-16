import react,{useState} from "react";

const Tabs =({tabData}) => {
    const[activeTab, setActiveTab] = useState(tabData[0])
    return (
        <div>
            <ul>
                {
                    tabData.map((tab)=>(
                        <li onClick={()=>setActiveTab(tab.content)}>{tab.title}</li>
                    ))
                }
            </ul>
            <div>
                activeTab && <p>{activeTab}</p>
            </div>
        </div>
    )
}

export default Tabs