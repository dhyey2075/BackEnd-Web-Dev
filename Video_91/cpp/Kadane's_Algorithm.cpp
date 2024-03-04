#include <bits/stdc++.h>
#include <climits>
using namespace std;
int main(){
    int n=6;
    int sum=0,mx=INT_MIN;
    int arr[] = {3,4,-1,-2,-5,6};
    // cin>>n;
    // int arr[n];
    // for(int i=0;i<n;i++){
    //     cin>>arr[i];
    // }
    for(int i=0;i<n;i++){
        sum = sum + arr[i];
        if(sum<0){
            sum = sum - arr[i];
            sum = 0;
        }
        mx = max(mx,sum);
    }
    cout<<mx;
}