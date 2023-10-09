const learningnode =  async (req,res) => {
    if(true){
        res.status(200).json({
            first : "this is my second api",
            success :true
        })
    } else{
        res.status(400).json({
            first : "api in second api",
            success :false
        })
    }
    
   
}

module.exports = learningnode;