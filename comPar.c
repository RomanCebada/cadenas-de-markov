#include <stdio.h>
#include <mpi.h>

int main(int argc, char* argv[]){
    int total_proc,id_proc;
    MPI_Init(&argc,&argv);
    int com;
    MPI_Status status;
    MPI_Comm_rank(MPI_COMM_WORLD,&id_proc);
    MPI_Comm_size(MPI_COMM_WORLD,&total_proc);

    //Se crea esta condicion para saber si el numero de procesos es par
    //ademas de ver que el id del procesos sea menor igual a la primera mitad 
    //de los procesos
    if((total_proc%2==0)&&(id_proc<=((total_proc/2)-1))){
        //se obtiene el proceso con el que se comunica sumandole el id del proceso
        //a la mitad de los procesos
        com=(total_proc/2)+id_proc;
        //se envia el mensaje al proceso destino y se recive el mensaje del mismo 
        MPI_Send(&id_proc,1,MPI_INT,com,0,MPI_COMM_WORLD);
        MPI_Recv(&com,1,MPI_INT,com,0,MPI_COMM_WORLD,&status);
        //Se imprime el mensaje de saludo para el proceso con el que se comunica
        printf("Hola pareja %d soy el proceso %d",com,id_proc);
    }

    //Se crea esta condicion para saber si el numero de procesos es par
    //ademas de ver que el id del procesos sea mayor a la primera mitad 
    //de los procesos
    else if((total_proc%2==0)&&(id_proc>=((total_proc/2)))){
        //se obtienen el procesos con el que se comunica  restandole a su id la mitad de procesos
        com=id_proc-(total_proc/2);
        //se envia el mensaje al proceso destino y se recive el mensaje del mismo 
        MPI_Send(&id_proc,1,MPI_INT,com,0,MPI_COMM_WORLD);
        MPI_Recv(&com,1,MPI_INT,com,0,MPI_COMM_WORLD,&status);
        //Se imprime el mensaje de saludo para el proceso con el que se comunica
        printf("Hola pareja %d soy el proceso %d",com,id_proc);
    }
    //en caso de que los procesos no son pares se termina el programa
    else{
        return 0;
    }

    MPI_Finalize();
}