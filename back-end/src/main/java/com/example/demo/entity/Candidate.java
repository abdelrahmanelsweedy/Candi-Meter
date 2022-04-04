package com.example.demo.entity;

import com.example.demo.entity.common.JPAEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode(of = "id", callSuper = false)
@ToString(of = "id", callSuper = false)
public class Candidate extends JPAEntity {

    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "E-mail")
    private String email;

    /*
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DOCUMENT_ID")
    private Document document;
    */


}
