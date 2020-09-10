# 실무를 위한 React & Redux 온라인 스터디
React & Redux for Real World Projects
with Harry, Roto, Jin and Chrissy

### 🤓 코드리뷰에 참여하기(GitHub에서 Pull request 보내기)

우선 시작하는 주차의 branch 를 `checkout` 합니다.
우선 1주차라고 가정해볼게요.

```
git checkout class/#1
```

자신이 `Pull request` 를 올릴 branch 를 만듭니다.

```
git checkout -b class/#1_슬랙닉네임
```

만든 브랜치를 `push` 해서 올립니다.

```
git push origin class/#1_슬랙닉네임
```

이제 작업할 브랜치를 만듭니다.

```
git checkout -b class/#1_슬랙닉네임_working
```

만든 브랜치를 올립니다.
```
git push origin class/#1_슬랙닉네임_working 
```

작업할 브랜치에서 작업을 한 후, `commit` 과 `push` 를 합니다.
```
git commit -a -m "~~~"
git push
```

1. 이제 레포에 접속한 뒤
2. `Pull requests` 탭으로 가서, 영롱하게 빛나는 녹색 버튼 `New pull request` 를 누릅니다.
3. **여기서 중요한 것!** `class/#1_슬랙닉네임` ⇐ `class/#1_슬랙닉네임_working` 으로 설정하고 버튼을 눌러야 합니다. 즉 왼쪽이 `Pull request` 대상이고, 오른쪽이 소스입니다.

### 미션 확인하기
미션은 Github에서 Issues를 확인하면 됩니다. 1주차 미션은 https://github.com/learn-programmers/prgrms-rct-5/issues/1 에서 확인할 수 있습니다.

----

Git에 대한 내용은 [지옥에서 온 Git](https://opentutorials.org/course/2708)을 확인해보세요.
GitHub 사용법 관련해서는 [이 문서](https://backlog.com/git-tutorial/kr/stepup/stepup3_3.html)를 읽어보세요.
