//Implement a program that calculates the minimum number of coins required to give a user change.

#include <stdio.h>
#include <cs50.h>
#include <math.h>


int main(void)
{

//get change owed, reject if negative
    float cash;
    printf("Change owed: ");

    do {
        cash= get_float();
    }
    while(cash<0);

//avoid imprecision by converting to cents
int cents = cash*100+.5;

int count = 0;

//while(cash>1){
//    cash-1;
//    count++;
//}

while (cents>=25){
    count++;
    cents-=25;

}
while (cents>=10){
    count++;
    cents-=10;

}
while (cents>=5){
    count++;
    cents-=5;

}
while (cents>=1){
    count++;
    cents-=1;

}
printf("%i\n", count);

}