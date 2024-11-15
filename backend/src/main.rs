use actix_web::{post,web,App,HttpServer,Responder};
use serde::Deserialize;

#[derive(Deserialize)]
struct InputData{
	value: String,
}

#[post("/send-data")]
async fn send_data(data: web::Json<InputData>)-> impl Responder{
	format!("Received: {}",data.value)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
	HttpServer::new(|| {
		App::new()
			.service(send_data)
	})
	.bind("127.0.0.1:8080")?
	.run()
	.await
}