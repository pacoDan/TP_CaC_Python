import traceback

while(True): 
    try: 
        n = float(input("Introduce un número: ")) 
        m = 4 
        print("{}/{} = {}".format(n,m,n/m)) 
    except: 
        print("Ha ocurrido un error, introduce bien el número") 
        print(traceback.print_exc())