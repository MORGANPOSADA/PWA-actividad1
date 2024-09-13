console.log('SW Hola mundo !!');

self.addEventListener('install',(event)=>{
    console.log('SW: Instalado');
});  //indicando que se instale nuestro service worker

self.addEventListener('fetch', (event)=>{
    console.log(event.request.url);
    //console.log("estilos cambiados");


    if(event.request.url.includes('style.css')){
        const respuesta = new Response(
            `body{
                color: white;
                background-color: #000;
            }`,
            {
                headers:{
                    'Content-Type':'text/css'
                }
            }
        );
        event.respondWith(respuesta);
    }

})