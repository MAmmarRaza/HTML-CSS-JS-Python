#include<iostream>
using namespace std;
//class Node
class Node
{
	private: 
		int data;
		Node* next;
		Node* prev;
	public: 
		int getData();
		Node* getNext();
		Node* getPrev();
		void setData(int);
		void setNext(Node*);
		void setPrev(Node*);		
};
//getter for node class 
int Node::getData()
{
	return data;
}
Node* Node::getNext()
{
	return next;
}
Node* Node::getPrev()
{
	return prev;
}
void Node::setPrev(Node* prev)
{
	this->prev = prev;
}
//Setters for Node class
void Node::setData(int data)
{
	this->data = data;
}
void Node::setNext(Node* next)
{
	this->next = next;
}
//Class List
class List
{
	private:
		Node* currentLoc;
	public: 
		List()
		{
			currentLoc = NULL;
		}
		void Print();
		void Insert(int data);
		void Delete(Node* head,int data);
		void setCurrentLoc(Node* currentLoc);
		void AddBetween(Node* currentLoc,int data);
		void FindMin(Node* n);
		void FindMax(Node* n);
		int Search(Node* head,int Value);
		void desiredLoc(int loc,int data);
		void swap(Node* &head,Node* &tail);
		void sort(Node* head);
};

void List::desiredLoc(int loc,int data)
{
	Node* tempNode=currentLoc;
	Node* newNode=new Node();
	newNode->setData(data);
	if(loc==1)
	{
		newNode->setNext(tempNode);
		currentLoc=newNode;
		return;
	}
	for(int i=1;i<loc-1;i++)
	{
		tempNode=tempNode->getNext();
	}
	newNode->setNext(tempNode->getNext());
	tempNode->setNext(newNode);	
}
int List::Search(Node* head,int Value)
{
	int S;
	while(head!=NULL)
	{
		if(head->getData()==Value)
		{
			S = Value;
		}
		head = head->getNext();
	}
	if(S==Value)
	{
		return 1;
	}
	else
	{
		return 0;
	}
}
void List::FindMax(Node* n)
{
	int max = n->getData();
	while(n->getNext()!=NULL)
	{
		if(max<n->getNext()->getData())
		{
			max = n->getNext()->getData();
		}
		n = n->getNext();
	}
	cout<<"MAX VALUE : "<<max<<endl;
}
void List::FindMin(Node* n)
{
	int min = n->getData();
	while(n->getNext()!=NULL)
	{
		if(min>n->getNext()->getData())
		{
			min = n->getNext()->getData();
		}
		n = n->getNext();
	}
	cout<<"MIN VALUE : "<<min<<endl;
}
void List::AddBetween(Node* currentLoc,int data)
{
	if(currentLoc==NULL)
	{
		cout<<" Previous Location Should Not be NULL";
		return;
	}
	else
	{
		Node* newNode = new Node();
		newNode->setData(data);
		newNode->setNext(currentLoc->getNext());
		currentLoc->setNext(newNode);
	}	
}
void List::Delete(Node* head,int data)
{
	Node* tempNode = head;
	while(tempNode->getNext()->getData()!=data)
	{
		tempNode = tempNode->getNext();
	}
	Node* toDelete = tempNode->getNext();
	tempNode->setNext(tempNode->getNext()->getNext());
	delete toDelete;
}
void List::Insert(int data)
{
	Node* newNode = new Node();
	newNode->setData(data);
	newNode->setNext(NULL);
	Node* tempNode=currentLoc;
	while(tempNode->getNext()!=NULL)
	{
		tempNode=tempNode->getNext();
	}
	tempNode->setNext(newNode);
	tempNode->setPrev(tempNode);
}
void List::setCurrentLoc(Node* currentLoc)
{
	this->currentLoc = currentLoc;
}
void List::Print()
{
	Node* tempNode = currentLoc;
	while(tempNode!=NULL)
	{
		if(tempNode->getNext()==NULL)
		{
			cout<<tempNode->getData()<<" --> NULL ";
		}
		else
		{
			cout<<tempNode->getData()<<" --> ";
		}
		tempNode = tempNode->getNext();
	}
}
//Main Function
int main()
{
	Node* Node1 = new Node();
	Node* Node2 = new Node();
	Node1->setData(1);
	Node1->setNext(Node2);
	Node1->setPrev(NULL);
	Node2->setData(2);
	Node2->setNext(NULL);
	Node2->setPrev(Node1);
	List l;
	l.setCurrentLoc(Node1);
	l.Insert(-1);
	l.Insert(4);
	l.Insert(5);
	cout<<"Before Deletion"<<endl;
	l.Print();
	cout<<endl;
	cout<<"After Deletion"<<endl;
	l.Delete(Node1,2);
	l.Print();
	cout<<endl;
	//l.Print();
	//cout<<endl;
	cout<<"After Adding in Between"<<endl;
	l.AddBetween(Node2,7);
	l.Print();
	cout<<endl;
	l.FindMin(Node1);
	l.FindMax(Node1);
	if(l.Search(Node1,5)==1)
	{
		cout<<"Searched Value Exist"<<endl;
	}
	else
	{
		cout<<"Searched Value Does Not Exist"<<endl;
	}
	//l.desiredLoc(3,16);
	l.Print();
	cout<<endl;
	//l.swap(Node1,Node2);
	cout<<endl;
	
	return 0;
}