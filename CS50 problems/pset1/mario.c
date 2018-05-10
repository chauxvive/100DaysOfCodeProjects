#include <stdio.h>
#include <cs50.h>

int main(void)
{
    //int number;
    printf("   ##\n  ###\n ####\n#####\n");
    printf("Would you like to make a Mario pyramid too? \n");
    printf("How many steps? (<24) \n");

    //get an integer. Reprompt if invalid

    int height;
    do {
        height = get_int();
    }
    while (height<0 || height>24);


// print the pyramid
    for (int i = 0; i<height; i++){
        for (int j = height-i; j>1;j--){
            printf(" ");
        }
        for (int k=0; k<i+2; k++){
            printf("#");
        }
        printf("\n");
    }
}    