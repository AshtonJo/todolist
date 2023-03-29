### **1) TodoTemplate**

모든 기능은 TodoTemplate 컴포넌트 안에 구성되게 됩니다.

전 컨포넌트가 담겨있는 컨테이너라고 생각하면 될 것 같습니다.

### 2) TodoInsert

할 일의 입력이 가능한 컴포넌트 입니다.

할 일을 입력하세요. 라는 글씨가 적혀있는 입력창에 + 버튼을 클릭하게 되면 할일이 추가됩니다.

### 3) TodoList

각 TodoListItem 하나씩 담아주는 역할을 하는 컨테이너라고 보시면 됩니다.

즉, 할 일 목록의 역할을 하게됩니다.

### 4) TodoListItem

각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다.

만들어진 후 TodoList에 들어가게 됩니다.

# 🐣 TodoList 앱 구성

앱의 구조를 그림으로 나타내면 이런식으로 렌더링됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fba479d2-e80f-4512-8dcd-ec4055d57b1e/Untitled.png)

TodoTemplate 안에 모든 것들을 넣는다면 이런형식으로 구조가 잡힙니다.

```jsx
<TodoTemplate> 앱을 이루는 컨테이너 박스
	<TodoInsert /> 할 일 입력창 
	<TodoList> 할 일 목록
		<TodoListItem /> 할 일
	</TodoList>
</TodoTemplate>
```

```jsx
<TodoEdit /> 수정하기창(팝업창)
```
