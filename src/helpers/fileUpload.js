export const fileUpload = async ( file, path ) => {

    if( !file ) throw new Error('No file selected')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dkhbhau0a/upload'

    const formData = new FormData()

    formData.append('upload_preset', 'React-Journal')

    formData.append('file', file)

    try {

        const resp = await fetch( cloudUrl, {

            method: 'POST',
            body: formData

        });

        if( !resp.ok ) throw new Error( 'No se pudo subir la imagen' )

            const cloudResp = await resp.json() 

            return cloudResp.secure_url
        
    } catch (error) {

        throw new Error( error.message )

    }

}