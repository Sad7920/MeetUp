import { Server } from 'socket.io'

const SocketHandler = (req: any, res: any) => {
    console.log("Called Socket API");

    if (res.socket.server.io) {
        console.log("socket already running");
    } else {
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on("connection", (socket) => {
            console.log("server is connected");

            socket?.on('join-room', (roomId, userId) => {
                console.log(`a new user ${userId} joined room - ${roomId}`);
                socket.join(roomId)
                socket.broadcast.to(roomId).emit('user-connected', userId)
            })

            socket?.on("user-toggle-video", (userId, roomId) => {
                console.log("user toggle video stream");

                socket.join(roomId)
                socket.broadcast.to(roomId).emit('user-toggle-video', userId)
            })
            socket?.on("user-toggle-audio", (userId, roomId) => {
                console.log("user toggle audio stream");

                socket.join(roomId)
                socket.broadcast.to(roomId).emit('user-toggle-audio', userId)
            })
        })
    }
    res.end()
}

export default SocketHandler

