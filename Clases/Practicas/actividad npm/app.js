    const fs = require('fs');


    const readJson = async (path) => {
        try{
            const content = await fs.promises.readFile(path, 'utf-8');
        return{
            str: content,
            obj: JSON.parse(content),
        };
    }
    catch(error){
            console.log(`Ah ocurrido un error ${error}`)
        
        }
        }
        const writeJson = async(path, data)=>{
            const str = JSON.stringify(data,null,"\t");
            try{
                await fs.promises.writeFile(path,str,"utf-8")
                console.log("Se ha guardado el archivo exitosamente");
            }catch(error){
                console.log(`Ah ocurrido un error ${error}`)}
        }
        const biteSize =  (str) => Buffer.from(str).length;

        (async function (run) {
            if (!run)return;
            const data = await readJson('./package.json');

            const info = {
                ...data,
                size:biteSize(data.str),
            }

            console.log(info)
            await writeJson('./info.json', info);
        })(true);
