//package pre_002.stackOverFlow_Clone.restdocs.user;
//
//import com.google.gson.Gson;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.context.TestConfiguration;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
//import org.springframework.http.MediaType;
//import org.springframework.restdocs.payload.JsonFieldType;
//import org.springframework.security.access.SecurityConfig;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.AuthenticationEntryPoint;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.access.AccessDeniedHandler;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.test.context.ActiveProfiles;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.ResultActions;
//import pre_002.stackOverFlow_Clone.auth.filter.JwtAuthenticationFilter;
//import pre_002.stackOverFlow_Clone.auth.jwt.JwtTokenizer;
//import pre_002.stackOverFlow_Clone.user.controller.UserController;
//import pre_002.stackOverFlow_Clone.user.dto.UserDto;
//import pre_002.stackOverFlow_Clone.user.entity.User;
//import pre_002.stackOverFlow_Clone.user.mapper.UserMapper;
//import pre_002.stackOverFlow_Clone.user.service.UserService;
//
//import java.util.List;
//
//import static org.mockito.BDDMockito.given;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//import static pre_002.stackOverFlow_Clone.util.ApiDocumentUtils.getRequestPreProcessor;
//import static pre_002.stackOverFlow_Clone.util.ApiDocumentUtils.getResponsePreProcessor;
//import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.*;
//
//@WebMvcTest(value = UserController.class, )
//@MockBean(JpaMetamodelMappingContext.class)
//@AutoConfigureRestDocs
//public class UserControllerRestDocsTest {
//    @MockBean
//    private PasswordEncoder passwordEncoder;
//
//    @MockBean
//    private UserDetailsService userDetailsService;
//
//    @MockBean
//    private AuthenticationEntryPoint authenticationEntryPoint;
//
//    @MockBean
//    private AuthenticationSuccessHandler authenticationSuccessHandler;
//
//    @MockBean
//    private AuthenticationFailureHandler authenticationFailureHandler;
//
//    @MockBean
//    private AccessDeniedHandler accessDeniedHandler;
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private UserService userService;
//    @MockBean
//    private UserMapper userMapper;
//
//    @Autowired
//    private Gson gson;
//
////    @TestConfiguration
////    static class DefaultConfigWithoutCsrf extends WebSecurityConfigurerAdapter {
////        @Override
////        protected void configure(final HttpSecurity http) throws Exception {
////            super.configure(http);
////            http.csrf().disable();
////        }
////    }
//
//    // 회원가입 test
//    @Test
//    public void signUpTest() throws Exception {
//        UserDto.Post post = new UserDto.Post("kimcoding@gmail.com", "김코딩", "asd123");
//        String content = gson.toJson(post);
//
//        UserDto.Response responseDto = new UserDto.Response(1L,"kimcoding@gmail.com", "김코딩");
//
//        given(userMapper.userPostDtoToUser(Mockito.any(UserDto.Post.class))).willReturn(new User());
//
//        given(userService.createUser(Mockito.any(User.class))).willReturn(new User());
//
//        given(userMapper.userToUserResponseDto(Mockito.any(User.class))).willReturn(responseDto);
//
//        ResultActions actions =
//                mockMvc.perform(
//                        post("/users/signup")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//
//                );
//
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(jsonPath("$.email").value("sign-up success"))
//                .andDo(document(
//                        "post-user",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
//                                        fieldWithPath("userName").type(JsonFieldType.STRING).description("이름"),
//                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
//                                )
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("message").type(JsonFieldType.STRING).description("로그인 성공")
//                                )
//                        )
//                ));
//    }
//}
