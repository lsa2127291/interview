
#include <iostream>
#include <vector>
#include <string>
#include <ctime>
using namespace std;
 
string strMap[] = { "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };
 
typedef vector<string> StrArray;
 
 
int main()
{
	clock_t start,finish;
	double duration = 0.0; 
 
 
	string strNum;
	StrArray mStrResultVec;
	
	StrArray mStrTempVec;
	while( cin >> strNum )
	{
		///////////////////
		start = clock();
		/////////////
 
		mStrResultVec.clear();
		mStrResultVec.push_back( "" );
		
		//采用分期摊还的方法求排列组合
		for( int i = 0; i < strNum.size(); ++i )
		{
			string strTemp = strMap[strNum[i]- '0'-1];
			mStrTempVec.clear();
 
			for( int j = 0; j < strTemp.size(); ++j )
			{
				for( int k = 0; k < mStrResultVec.size(); ++k )
				{
					mStrTempVec.push_back( mStrResultVec.at(k)+strTemp[j] );
				}
			}
			if ( !mStrTempVec.empty() ) mStrResultVec = mStrTempVec;
		}
 
		///////////////////
		finish = clock();    
		duration = (double)(finish-start);    
		cout << "时间消耗:" << duration << "ms" << endl << endl;  
		///////////////////
	}
 
  return 0;
  