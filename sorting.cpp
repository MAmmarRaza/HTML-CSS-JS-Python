#include<iostream>
using namespace std;
int const size=5;

class Queue{
	private:
		int array[size];
		int front;
		int back;	
	public:
		Queue(){
			front=-1;
			back=-1;
		}
		void enQueue(int data){
			if(front==size){
				cout<<"Queue is Full!!! "<<endl;
			}
			if(front==-1){
				front++;
				back++;
				array[back]=data;
			}
			else{
				back++;
				array[back]=data;
			}	
		}
		void deQueue(){
			if(isEmpty()){
				cout<<"Queue is Empty!!"<<endl;
			}
			else{
				front++;
				cout<<"\nData DeQueue Successfully!!"<<endl;
			}
			
		}
		void display(){
			if(isEmpty()){
				cout<<"Queue is Empty!!"<<endl;
			}
			else{
				for(int i=front;i<=back;i++){
					if(i==back){
						cout<<array[i]<<"<--------NULL";
					}
					else
						cout<<array[i]<<"<--------";
				}	
			}
		}
		
		bool isEmpty(){
			return front==-1;
		}
		int GetFront(){
			if(isEmpty()){
				cout<<"Queue is Empty!!"<<endl;
			}
			else
			return array[front];
		}
};

int main(){
	char key,esc;
	int n;
	Queue q;
while(1){
	system("cls");
	cout<<"\n\t\t\tImplimentation Of Queue By Using Array";
	cout<<"\n\t\t\t\t\tMain Menu";
	cout<<"\n\t\t------------------------------------------------------";
	cout<<"\n\n\t\t1.	Insert Element into Queue (Press 1)\n\t\t2.	Delete element from queue (Press 2)\n\t\t3.	Display the queue (Press 3)\n\t\t4.	Exit (Press 4)";
	cout<<"\n\n\t\t------------------------------------------------------\n\n\t\t\t\tChoose key:  ";
	cin>>key;
	
	switch(key){
		case '4':
			return 0;
			break;
		case '3':
			system("cls");
			cout<<"\n\n---------------------------------------------"<<endl;
			cout<<"Queue Data: ";
			q.display();
			cout<<"\n---------------------------------------------"<<endl;
			cout<<"\nPress Anykey for main Menu: ";
			cin.get();
			cin.get();
			break;
		case '2':
			system("cls");
			q.deQueue();
			cout<<"\nPress Anykey for main Menu: ";
			cin.get();
			cin.get();
			break;
		case '1':
			system("cls");
			bool t=true;
			while(t==true){
				cout<<"Enter Data for Queue: ";
				cin>>n;
				q.enQueue(n);
				cout<<"Data Inserted Successfully!!\n-----------------------------------"<<endl;
				cout<<"\nPress 'x' to escape to main menu else continue: ";
				cin>>esc;
				if(esc=='x'){
					t=false;
				}
			}
			break;
	}
}
	

}