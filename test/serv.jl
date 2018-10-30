# https://github.com/wookay/Bukdu.jl

using Bukdu # ApplicationController Conn redirect_to routes get plug Plug CLI

struct FrontController <: ApplicationController
    conn::Conn
end

function index(c::FrontController)
    redirect_to(c.conn, "/test")
end

routes() do
    get("/", FrontController, index)
    plug(Plug.Static, at="/", only=["index.js", "src"], from=normpath(@__DIR__, ".."))
    plug(Plug.Static, at="/", only=["test/index.html", "test/require", "test/runtests.js", "test/test_"], from=normpath(@__DIR__, ".."))
end

Bukdu.start(8080)
CLI.routes()
