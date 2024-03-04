#include <bits/stdc++.h>
using namespace std;
int main(){
    int n,k;
    cin>>n>>k;
    char arr[n+1];
    int num[26]={0};
    for(int i=0;i<n;i++)
        cin>>arr[i];
    for(int j=0;j<n;j++){
        num[arr[j]]  = num[arr[j]] + arr[j];
    }
    for(int i=0;i<26;i++){
        if(num[i]%k!=0){
            for(int l=0;l<n;l++){
                if(arr[l]==num[i]){
                    for(int p=0;p<n-l;p++){
                        int temp = arr[p];
                        arr[p] = arr[p+1];
                        arr[p+1]=temp;

                    }
                }
            }
        }
    }
    for(int h=0;h<n;h++){
        cout<<arr[h];
    }
}