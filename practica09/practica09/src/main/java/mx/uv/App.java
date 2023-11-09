package mx.uv;
import static spark.Spark.*;

import com.google.gson.JsonObject;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers"); 
            if(accessControlRequestHeaders!=null){          
              response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);         
            }    
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");           
            if(accessControlRequestMethod!=null){     
                response.header("Access-Control-Allow-Methods",accessControlRequestMethod);           
            }           
            return "OK";
            });  
            before((request,response)->response.header("Access-Control-Allow-Origin","*"));


        System.out.println( "Hello World!" );
        get("/",
            (request, response) -> "<h1>Bienvenido</h1>"
        );
        get("/hola",
            (request, response) -> "<h1>Bienvenido</h1>"
        );
        get("/adios",
            (request, response) -> "<h1>Hasta la visata baby</h1>"
        );
        get("/fin",
            (request, response) -> "<h1>Muerte por snusnus</h1>"
        );
        get("/alumno", 
            (request, response)->"{'alumno' : 'John', 'matricula' : 'z20010102'}"
        );

        post("/alumno",
            (request, response)->{
                System.out.println(request.contentLength());
                System.out.println(request.contentType());
                System.out.println(request.contextPath());

                return "Hola: "+request.queryParams("nombre");
            }
        );

        // post("/", (req, res)->{
        //     System.out.println(req.queryParams("email")+" "+
        //                         req.queryParams("password"));
        //     System.out.println(req.body());
        //                         res.status(200);//codigo de respuesta

        //     JsonObject oRespuesta= new JsonObject();
        //     oRespuesta.addProperty("msj", "Hola");
        //     oRespuesta.addProperty("email", req.queryParams("email"));

        //     return oRespuesta;
        // }
        
        // );

        get("/tipo-usuario", (request, response)->{
            JsonObject respuesta = new JsonObject();
            respuesta.addProperty("tipousuario", "profesor");
            respuesta.addProperty("nombre", request.queryParams("nombre"));
            respuesta.addProperty("paterno", request.queryParams("paterno"));
            respuesta.addProperty("materno", request.queryParams("materno"));


            return respuesta;
        });
    }
}
