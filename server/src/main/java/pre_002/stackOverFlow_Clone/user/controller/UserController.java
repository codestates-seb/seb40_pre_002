package pre_002.stackOverFlow_Clone.user.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import pre_002.stackOverFlow_Clone.dto.SignUpResponseDto;
import pre_002.stackOverFlow_Clone.user.dto.UserDto;
import pre_002.stackOverFlow_Clone.user.entity.User;
import pre_002.stackOverFlow_Clone.user.mapper.UserMapper;
import pre_002.stackOverFlow_Clone.user.service.UserService;

@RestController
@Validated
@Slf4j
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;


    // 회원가입
    @PostMapping("/users/signup")
    public ResponseEntity signUp(@RequestBody UserDto.Post userPostDto){
        User user = userService.createUser(userMapper.userPostDtoToUser(userPostDto));
        return new ResponseEntity<>(new SignUpResponseDto<>("sign-up success"), HttpStatus.CREATED);
    }
//
//    // 로그인
//    @PostMapping("/user/login")
//    public ResponseEntity logIn(){
//
//    }

}
