import sys
import socket
import OSC

c = OSC.OSCClient()
c.connect(('127.0.0.1', 6448))

# Create a TCP/IP socket
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Bind the socket to the port
server_address = ('', 6447)
print 'starting up on %s port %s' % server_address
sock.bind(server_address)

while True:
    data, address = sock.recvfrom(18)
    
    print "data", data

    sys.stdout.flush()

    
    oscmsg = OSC.OSCMessage()
    oscmsg.setAddress("/wek/inputs")
    arr = data.split(',')
    # print len(arr)

    for val in arr:
      try:
        print "appending", float(val) 
        oscmsg.append( float(val) )
      except ValueError:
        print "error, appening 0.0"
        oscmsg.append( 0.0 )

    c.send(oscmsg)