export default function CoolButton({text}){
    
return(
    <div>
        <button className="buton" style={{cursor:"pointer",border:"0", borderRadius:"4px"
        ,fontWeight:"600",margin:"0 20px",width:"200px",padding:"10px 0",
        boxShadow:"0 0 20px rgba(104,85,224,0.2)",transition:"0.4s",
        marginTop:"5px",alignSelf:"center",justifyContent:"center",display:"flex"}}>{text}</button>
    </div>
);
}
