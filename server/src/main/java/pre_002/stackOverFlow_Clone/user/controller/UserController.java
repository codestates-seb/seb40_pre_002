package pre_002.stackOverFlow_Clone.user.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.user.dto.UserPostDto;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.mapper.UserMapper;
import pre_002.stackOverFlow_Clone.user.service.UserService;

@CrossOrigin
@RestController
//@Validated
//@Slf4j
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;


    @GetMapping("/")
    public String helloWorld(){
        return "pre project: communication test";
    }


    // 회원가입
    @PostMapping("/user/signup")
    public ResponseEntity signUp(@RequestBody UserPostDto userPostDto){
        User user = userService.createUser(userMapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity<>(userMapper.userToUserResponseDto(user), HttpStatus.CREATED);
    }
//
//    // 로그인
//    @PostMapping("/user/login")
//    public ResponseEntity logIn(){
//
//    }

}