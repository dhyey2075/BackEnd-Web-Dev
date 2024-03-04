#include <bits/stdc++.h>
using namespace std;
int main(){
    int n,c=0;
    int pc = 1;
    string str;
    cin>>n;
    cin>>str;   
    int arr[n];
    for(int i=0;i<n;i++){
        arr[i]=0;
    }
    while(pc!=c){
        pc=c;
    for(int i=0;i<n-1;i++){
        if(str[i]=='A' && str[i+1]=='B' && arr[i]==0){
            char temp = str[i];
            str[i]=str[i+1];
            str[i+1]=temp;
            arr[i]=1;
            c++;
        }
    }
    }
    cout<<c<<endl;
}